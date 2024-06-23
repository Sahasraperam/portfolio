/*=============== SHOW MENU ===============*/
	const navMenu=document.querySelector('#nav-menu'),
	       navToggle=document.querySelector('#nav-toggle'),
		   navClose=document.querySelector('#nav-close');


		   if(navToggle)
			{
				navToggle.addEventListener('click',()=>{navMenu.classList.add('show-menu')})
			}



			if(navClose)
				{
					navClose.addEventListener('click',()=>{navMenu.classList.remove('show-menu')})
				}
				
/*=============== REMOVE MENU MOBILE ===============*/
// let navLink=document.querySelector('.nav_link');
// // const linkAction=()=>
// // {
// // 	const navMenu=document.querySelector('#nav-menu');
// // 	navMenu.classList.remove('show-menu')
// // };
// navLink.forEach((link) => {
// 	link.addEventListener('click', () => {
// 	  const navMenu = document.querySelector('#nav-menu');
// 	  navMenu.classList.remove('show-menu');
// 	});
//   });
const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show-menu');
  });
});




/*=============== SHADOW HEADER ===============*/

const shadowHeader=()=>{
	const header=document.getElementById('header')
	this.scrollY>=50? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll' , shadowHeader)

/*=============== EMAIL JS ===============*/


const contactForm=document.getElementById('contact-form'),
		contactMessage=document.getElementById('contact-message')
	
	
		const sendEmail=(e)=>
		{
			e.preventDefault()
			
			// serviceID - templateID - #form - publicKey
			emailjs.sendForm('service_jdwntq7','template_nx6rgv2','#contact-form','6EWlHnPsF-xJzd-vp')
			.then(()=>
			{
				   // Show sent message
				contactMessage.textContent='Message sent successfully ✅';
			
				   // Remove message after five seconds
				   setTimeout(()=>
				{
					contactMessage.textContent=''
				},5000)
			
				   // Clear input fields

				   contactForm.reset()
				} ,()=>
				{
					  // Show error message
					  contactMessage.textContent='Message not sent (service error) ❌'
				})
		}	
		contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>
	{
		const scrollUp=document.getElementById('scroll-up')

		this.scrollY >=350 ? scrollUp.classList.add('show_scroll'):scrollUp.classList.remove('show_scroll')
	}
	window.addEventListener('scroll',scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections=document.querySelectorAll('section[id]')
const scrollActive=()=>{
	const scrollDown=window.scrollY

sections.forEach(current=>
	{
		const sectionHeight=current.offsetHeight,
		       sectionTop=current.offsetTop-58,
			   sectionId=current.getAttribute('id'),
			   sectionsClass=document.querySelector('.nav_menu a[href*='+sectionId+']')

			if(scrollDown> sectionTop && scrollDown<=sectionTop+sectionHeight)
				{
					sectionsClass.classList.add('active-link')
				}
				else{
					sectionsClass.classList.remove('active-link')
				}


	
	}
)


}




/*=============== DARK LIGHT THEME ===============*/ 

const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'


const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')


const getCurrentTheme=()=>document.body.classList.contains(darkTheme)? 'dark':'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)? 'ri-moon-line':'ri-sun-line'

if(selectedTheme)
	{

		document.body.classList[selectedTheme==='dark'?'add':'remove'] (darkTheme)
		themeButton.classList[selectedIcon==='ri-moon-line'? 'add':'remove'](iconTheme)
	}

	themeButton.addEventListener('click',()=>{document.body.classList.toggle(darkTheme)
	    themeButton.classList.toggle(iconTheme)
		localStorage.setItem('selected-theme',getCurrentTheme())
		localStorage.setItem('selected-icon',getCurrentIcon())}
	
		
)





/*=============== SCROLL REVEAL ANIMATION ===============*/
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
const sr=ScrollReveal({
	origin:'top',
	distance:'60px',
	duration:2500,
	delay:400,
	// reset:true

})

sr.reveal(`.home_perfil,.about_image,.contact_mail`,{origin:'right'})
sr.reveal(`.home_name ,.home_info,
	,.about_container .section_title-1,.about_info,
	.contact_social,.contact_data`,{origin:'left'})
sr.reveal(`.services_card,.projects_card`,{interval:100})	

