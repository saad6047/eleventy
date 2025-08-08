import puppeteer from "puppeteer";

export async function GET() {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Apna Next.js page load karo
    await page.goto("http://eleventy-phi-indol.vercel.app", { waitUntil: "networkidle0" });

    // Page evaluate — sirf block ka HTML render karna
    await page.evaluate(() => {
        const block = document.getElementById("pdf-block");
        if (block) {
            document.body.innerHTML = block.outerHTML;
            document.body.style.margin = "0";
        }
    });

    // Generate PDF in A3, allow multiple pages
    const pdfBuffer = await page.pdf({
        format: "A3",
        printBackground: true,
        landscape: true,
        margin: {
            top: "20mm",
        },
    });

    await browser.close();

    return new Response(pdfBuffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=block.pdf",
        },
    });
}
