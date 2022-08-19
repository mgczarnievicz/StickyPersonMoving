(function () {
    const canvaStickFigure = document.getElementById("stickFigure");
    console.log("Canva Stick Figure", canvaStickFigure);

    const ctx = canvaStickFigure.getContext("2d");
    let color = "hsl(239, 100%, 50%)";

    function randmColor() {
        let color = Math.floor(Math.random() * 360);
        return `hsl(${color}, 100%, 50%)`;
    }

    function drawStickyFigure(color) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvaStickFigure.width, canvaStickFigure.height);

        /* ------------------------
             Face
        ---------------------------*/
        const faceX = 200;
        const faceY = 100;
        const faceRadius = 50;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.arc(faceX, faceY, faceRadius, 0, Math.PI * 2);
        ctx.stroke();

        /* ---------------------------
            Body
        --------------------------- */
        const bodyLength = 200;
        const bodyLengthY = faceY + faceRadius + bodyLength;
        ctx.beginPath();
        // Me want to move to the center of the face
        ctx.moveTo(faceX, faceY + faceRadius);
        ctx.lineTo(faceX, bodyLengthY);
        ctx.stroke();
        ctx.closePath();

        /* ---------------------------
            LEGS
        --------------------------- */
        const legLength = 70;
        ctx.beginPath();
        ctx.moveTo(faceX, bodyLengthY);
        ctx.lineTo(faceX - legLength, bodyLengthY + legLength);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(faceX, bodyLengthY);
        ctx.lineTo(faceX + legLength, bodyLengthY + legLength);
        ctx.stroke();
        ctx.closePath();

        /* ---------------------------
            ARMS
        --------------------------- */
        const armsY = bodyLength / 2 + faceY;

        ctx.beginPath();
        ctx.moveTo(faceX, armsY);
        ctx.lineTo(faceX - legLength, armsY - legLength);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(faceX, armsY);
        ctx.lineTo(faceX + legLength, armsY - legLength);
        ctx.stroke();
        ctx.closePath();
    }

    /*  Biger canva  */
    const canvas = document.getElementById("canvas");
    console.log("Canvas", canvas);

    const context = canvas.getContext("2d");

    drawStickyFigure(color);

    // draw (image, x, y)
    let positionX = 0;
    let positionY = 0;
    context.drawImage(canvaStickFigure, positionX, positionY);

    document.addEventListener("keydown", function (event) {
        console.log("event: ", event);
        switch (event.key) {
            case "ArrowLeft":
                // Left pressed
                positionX--;
                break;
            case "ArrowRight":
                // Right pressed
                positionX++;
                break;
            case "ArrowUp":
                // Up pressed
                positionY--;
                break;
            case "ArrowDown":
                // Down pressed
                positionY++;
                break;
            case "Shift":
                console.log("Shift pressed");
                color = randmColor();
                console.log("Color: ", color);
                break;
        }
        context.fillStyle = "white";

        context.fillRect(0, 0, canvas.width, canvas.height);

        drawStickyFigure(color);
        context.drawImage(canvaStickFigure, positionX, positionY);
    });
})();
