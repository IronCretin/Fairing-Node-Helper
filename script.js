let nodes = [
	0.70,
	0.74,
	1.20,
	1.24,
	1.70,
	1.74,
	2.20,
	2.24,
	2.70,
	2.74,
	3.20,
	3.24
].map(n => n - .22)

let update = () => {
    let s = +size.value / 1.25
    let t = +node.value
    let out = `	MODEL
	{
		model = Squad/Parts/Aero/fairings/AutoTruss
		scale = ${s},${s},${s}
		position = 0.0,${t},0.0
	}`
	let n = nodes.map(n => n + t)
    cfg.innerHTML = out
}

calc.addEventListener('click', update)