 




document.querySelector(".writing-p").addEventListener("click", ()=> {
    document.querySelector(".writing").style.transform = "translate(-3000px,0)";
    document.querySelector(".writing").style.transition = "1s ease-in-out";
    setTimeout(()=> {
        
        document.querySelector(".writing").style.display = "none";
         
    },500)


    document.querySelector(".symbols").style.opacity = "0";
    document.querySelector(".symbols").style.visibility = "hidden";
    document.querySelector(".back-icon").style.visibility = "visible";
    document.querySelector(".back-icon").style.transition = "0.3s ease";
    document.querySelector(".second-content").style.transition ="1s ease";
    document.querySelector(".second-content").style.transform ="translate(0,0)";
    const boxes = document.querySelectorAll(".box-later");

    boxes.forEach((box)=> {
        box.style.transition="opacity 1s ease";
        setTimeout(()=> {
            box.style.display="flex";
             
             
        },500)

   
       
     
    })
    
});

document.querySelector(".back-icon").addEventListener("click", ()=>{
    document.querySelector(".writing").style.opacity = 0;
         
    setTimeout(()=> {
        
        
        document.querySelector(".writing").style.opacity = 1;
         
    },600)
    document.querySelector(".writing").style.transform = "translate(0,0)";
 
    setTimeout(()=> {
        document.querySelector(".writing").style.display = "flex";
        document.querySelector(".symbols").style.visibility = "visible";
        document.querySelector(".symbols").style.opacity = "1";
    },500)
    
   
    document.querySelector(".back-icon").style.visibility = "hidden";
    document.querySelector(".second-content").style.transition ="1s ease";
    document.querySelector(".second-content").style.transform ="translate(3000px,0)";
    const boxes = document.querySelectorAll(".box-later");
    setTimeout(()=> {
        boxes.forEach((box)=> {
            box.style.display="none";
        })
    },500)
  
   
     
});



document.querySelector(".fa-link").addEventListener("mouseover", ()=> {
    document.querySelector(".overlay").style.width="30%";
})

document.querySelector(".fa-user-circle").addEventListener("mouseover", ()=> {
    document.querySelector(".upwork").style.width="30%";
})

document.querySelector(".fa-globe").addEventListener("mouseover", ()=> {
    document.querySelector(".hucev").style.width="30%";
})


document.querySelector(".fa-link").addEventListener("mouseout", ()=> {
    document.querySelector(".overlay").style.width="0%";
})
document.querySelector(".fa-user-circle").addEventListener("mouseout", ()=> {
    document.querySelector(".upwork").style.width="0%";
})

document.querySelector(".fa-globe").addEventListener("mouseout", ()=> {
    document.querySelector(".hucev").style.width="0%";
});

document.querySelector(".WhoButton").addEventListener("click", ()=> {
    document.querySelector(".second-content").style.opacity =0;
    document.querySelector(".DownMe").style.height="100%";

})

document.querySelector(".fa-times-circle").addEventListener("click", ()=> {
    document.querySelector(".DownMe").style.height="0%";
    setTimeout(()=> {
        document.querySelector(".second-content").style.opacity =1;
    },500)
  
   

})

document.querySelector(".fa-linkedin-square").addEventListener("click", ()=> {
    window.open("https://www.linkedin.com/in/ufuk-yılmazlar-62a4781a3/");
})
document.querySelector(".fa-github-square").addEventListener("click", ()=> {
    window.open("https://github.com/Thandei");
})

document.querySelector(".fa-facebook-square").addEventListener("click", ()=> {
    window.open("https://www.facebook.com/profile.php?id=100021887420561");
})
document.querySelector(".fa-envelope-square").addEventListener("click", ()=> {
    window.open("mailto:ufukyilmazlar@outlook.com");
})


