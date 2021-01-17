export class GlassesList {
  constructor() {
    this.glassesList = [];
  }
  addGlassesList(glasses) {
    this.glassesList.push(glasses);
  }
  // Display glassesList
  renderGlassesList() {
    let content = this.glassesList.reduce((glContent, item, index) => {
      //glContent = glContent (nội dung cũ) + `Nội dung mới`
      glContent += `
                  <div class="col-4">
                      <img class="img-fluid vglasses__items" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" alt="Glasses">
                  </div>
              `;
      return glContent;
    }, "");
    return content;
  }
}
