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
	let n = nodes.map(n => (n * s) + t)
	for(let i = 0; i < n.length; i += 2) {
		out += `

	node_stack_interstage0${i/2+1}a = 0.0, ${n[i]+(.01*(s-1))}, 0.0, 0.0, -1.0, 0.0, 0`
		out += `
	node_stack_interstage0${i/2+1}b = 0.0, ${n[i+1]-(.01*(s-1))}, 0.0, 0.0, 1.0, 0.0, 0`
	}
	out += `
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Cap1
		attachNodeNames = interstage01a,interstage01b
	}	
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Cap2
		attachNodeNames = interstage02a,interstage02b
	}
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Cap3
		attachNodeNames = interstage03a,interstage03b
	}
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Cap4
		attachNodeNames = interstage04a,interstage04b
	}
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Cap5
		attachNodeNames = interstage05a,interstage05b
	}
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Cap6
		attachNodeNames = interstage06a,interstage06b
	}	

	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Truss1
		attachNodeNames = interstage01a,interstage01b,interstage02a,interstage02b,interstage03a,interstage03b,interstage04a,interstage04b,interstage05a,interstage05b,interstage06a,interstage06b
	}	
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Truss2
		attachNodeNames = interstage02a,interstage02b,interstage03a,interstage03b,interstage04a,interstage04b,interstage05a,interstage05b,interstage06a,interstage06b
	}
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Truss3
		attachNodeNames = interstage03a,interstage03b,interstage04a,interstage04b,interstage05a,interstage05b,interstage06a,interstage06b
	}
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Truss4
		attachNodeNames = interstage04a,interstage04b,interstage05a,interstage05b,interstage06a,interstage06b
	}
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Truss5
		attachNodeNames = interstage05a,interstage05b,interstage06a,interstage06b
	}
	MODULE
	{
		name = ModuleStructuralNode
		rootObject = Truss6
		attachNodeNames = interstage06a,interstage06b
	}	
	
	MODULE 
	{
		name = ModuleStructuralNodeToggle
		MeshMenuName = Truss Structure
		NodeMenuName = Interstage Nodes
	}`
    cfg.innerHTML = out
}

calc.addEventListener('click', update)