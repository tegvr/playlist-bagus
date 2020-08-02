function changeAtiveTab(event,tabID){
    let element = event.target;
    while(element.nodeName !== "A"){
      element = element.parentNode;
    }
    ulElement = element.parentNode.parentNode;
    aElements = ulElement.querySelectorAll("li > a");
    
    // querySelectorAll return NodeList
    iElements = ulElement.querySelectorAll("li>a>span");
    //querySelector return the first Element 
    iconEl = element.querySelector('span')
    
    tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
    for(let i = 0 ; i < aElements.length; i++){
      aElements[i].classList.remove("border-b-2");
      aElements[i].classList.remove("border-teal-dark");
      aElements[i].classList.remove("text-white");
      aElements[i].classList.add("text-gray-500");
      iElements[i].classList.remove("opacity-100");
      iElements[i].classList.add("opacity-25");

      tabContents[i].classList.add("hidden");
      tabContents[i].classList.remove("block");
    }
    element.classList.remove("text-gray-500");

    element.classList.add("text-white");
    element.classList.add("border-b-2");
    element.classList.add("border-teal-dark");

    iconEl.classList.remove("opacity-25");
    iconEl.classList.add("opacity-100");

    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
}