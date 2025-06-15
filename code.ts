// code.ts

figma.showUI(__html__, { width: 300, height: 200 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-rectangles") {
    const rect = figma.createRectangle();
    rect.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
    figma.currentPage.appendChild(rect);
    figma.closePlugin();
  }
};
