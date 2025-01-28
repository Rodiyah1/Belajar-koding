function updatePreview() {
    let code = document.getElementById("code-editor").value;
    let outputFrame = document.getElementById("output").contentWindow.document;
    
    outputFrame.open();
    outputFrame.write(code);
    outputFrame.close();
}
