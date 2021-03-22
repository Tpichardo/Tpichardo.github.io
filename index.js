document.addEventListener("DOMContentLoaded", () =>{
    const showMoreOne = document.querySelector("#expand-btn-one");
    const projectOneDes = document.querySelector(".project-one-description");
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