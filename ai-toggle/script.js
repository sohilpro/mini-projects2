gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
		q = gsap.utils.selector(document),
		toArray = s => gsap.utils.toArray(s),
		mainSVG = select('#mainSVG'),
		whole = select('#whole'),
		toggle = select('#toggle')

gsap.set('svg', {
	visibility: 'visible'
})

function setToggledEnabled(state) {
	if(state) {
		toggle.addEventListener('click', click);
		toggle.style.pointerEvents = 'auto'
	} else {
		toggle.removeEventListener('click', click);
		toggle.style.pointerEvents = 'none'
	}
}
let tl = gsap.timeline({
	paused: true,
	onComplete: setToggledEnabled,
	onCompleteParams: [true]
});
tl.to('#toggle', {
	x: -150,
	fill: '#F26B6B',
	ease: 'expo.inOut'
})
.add('fingerIn', '+=0.5')
.to('#bothHands', {
	x: 30,
	ease: 'expo.inOut'
}, 'fingerIn')
.to('#toggle', {
	x: -140,
	duration: 0.43,
	ease: 'elastic(0.3, 0.6)'
}, '-=0.25')
	.add('handIn', '+=0.25')
.to('#bothHands', {
	x: 169,
	ease: 'expo.inOut'
}, 'handIn')
.to('#toggle', {
	//clearProps: 'fill',
	fill: '#2BDB7F',
	x: 0,
	ease: 'expo.inOut'
}, 'handIn')
.add('thumbsUp', '+=0.4')
.to('.robotHand', {
	duration: 0.116,
	opacity: gsap.utils.wrap([0,1])
}, 'thumbsUp')
.from('#robotThumb', {
	rotation: 45,
	duration: 1.3,
	transformOrigin: '55% 95%',
	ease: 'elastic(0.86, 0.3)'
}, 'thumbsUp')
.to('#bothHands', {
	x: '+=20',
	duration: 0.3,
	ease: 'power2.inOut'
}, 'thumbsUp')
.to('#bothHands', {
	rotation: '-=20',
	duration: 0.2,
	transformOrigin: '20% 50%',
	ease: 'power2.inOut'
}, 'thumbsUp')
.to('#bothHands', {
	rotation: 0,
	duration: 0.4,
	transformOrigin: '20% 50%',
	ease: 'elastic(0.86, 0.6)'
}, 'thumbsUp+=0.2')
.add('handOut')
.to('#bothHands', {
	x: 0,
	ease: 'back.in(1)'
}, 'handOut')
.to('#robotThumb', {
	rotation: 23,
	ease: 'power2.in'
}, 'handOut')

function click (e) {
	setToggledEnabled(false)
	tl.play(0);
}

setToggledEnabled(true)