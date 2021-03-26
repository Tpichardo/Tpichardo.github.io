document.addEventListener("DOMContentLoaded", () =>{
    const showMoreOne = document.querySelector("#expand-btn-one");
    const projectOneDes = document.querySelector(".project-one-description");
    // You can simplify this: showMoreOne.addEventListener("click", projectOne)
    showMoreOne.addEventListener("click", (event)=>{
        projectOne();
    })

    function projectOne(){
        let displayOne = projectOneDes.style.display
        if(displayOne =="block"){
            projectOneDes.style.display = "none"
            showMoreOne.innerHTML = "Show More"
        }else{
            projectOneDes.style.display = "block"
            showMoreOne.innerHTML = "Show Less"
        };

    };

    const showMoreTwo = document.querySelector("#expand-btn-two");
    const projectTwoDes = document.querySelector(".project-two-description");
    showMoreTwo.addEventListener("click", (e)=>{
        projectTwo()
    })

    
    // You shouldn't need two nearly identical functions - this violates DRY!
    // If you find yourself writing two very similar functions, a lot of times you can
    // combine them by adding an extra parameter!
    // In this case, since these are click handlers, they will be passed an event object
    // You can use event.target to make sure you are working with the appropriate DOM node
    function projectTwo(){
        let displayTwo = projectTwoDes.style.display
        if(displayTwo == "block"){
            projectTwoDes.style.display = "none"
            showMoreTwo.innerHTML = "Show More"
        }else{
            projectTwoDes.style.display = "block"
            showMoreTwo.innerHTML = "Show Less"
        };
    };

})
