const btnPanel = document.getElementById("btn-panel");
const panel = document.getElementById("panel");
const panelShadow = document.getElementById("panel-shadow");

const open = document.getElementById("open");
const close = document.getElementById("close");

btnPanel.addEventListener("click", () =>{
panel.classList.toggle("active"); 
panelShadow.classList.toggle("active");
btnPanel.classList.toggle("active");

if (close.classList.contains("none")){
    close.classList.remove("none");
    open.classList.add("none");
} else {
    close.classList.add("none");
    open.classList.remove("none");
}
})

//----------- SUB MENU PANEL

const handleWindowResize = () =>{

    const aFeatures = document.getElementById('features');
    const aCompany = document.getElementById('company');

    const ulF = document.getElementById('ulF');
    const ulC = document.getElementById('ulC');
    
    const iadF = document.getElementById('iadF');
    const iauF = document.getElementById('iauF');
    
    const iadC = document.getElementById('iadC');
    const iauC = document.getElementById('iauC');

    const screenWidth = window.innerWidth;

    if (screenWidth >= 500) {
        ulF.classList.add('none');
        ulC.classList.add('none');

        aFeatures.addEventListener('click', () =>{
            ulF.classList.toggle('none');
        
            if (iauF.classList.contains("none")){
                iauF.classList.remove("none");
                iadF.classList.add("none");
            } else {
                iauF.classList.add("none");
                iadF.classList.remove("none");
            }
        })

        aCompany.addEventListener('click', () =>{
            
            ulC.classList.toggle('none');
        
            if (iauC.classList.contains("none")){
                iauC.classList.remove("none");
                iadC.classList.add("none");
            } else {
                iauC.classList.add("none");
                iadC.classList.remove("none");
            }
        })

    } else {
        ulF.classList.remove('none');
        ulC.classList.remove('none');

        aFeatures.addEventListener('click', () =>{

            ulF.classList.toggle('active');
        
            if (iauF.classList.contains("none")){
                iauF.classList.remove("none");
                iadF.classList.add("none");
            } else {
                iauF.classList.add("none");
                iadF.classList.remove("none");
            }
        })
        
        aCompany.addEventListener('click', () =>{
        
            // let menu = aCompany.nextElementSibling;
            // console.log(menu.scrollHeight);
            
            ulC.classList.toggle('active');
        
            if (iauC.classList.contains("none")){
                iauC.classList.remove("none");
                iadC.classList.add("none");
            } else {
                iauC.classList.add("none");
                iadC.classList.remove("none");
            }
        })
    }
}

handleWindowResize();

window,addEventListener('resize', handleWindowResize);