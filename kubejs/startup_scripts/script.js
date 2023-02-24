// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')
onEvent('item.registry', event => {
	// Register new items here
	 event.create('tin_ore_dust').displayName('锡矿粉')
	 let crystal = (name, loc, rarity) => {
		 let id = name.toLowerCase()
		 event.create('growing_' + id + '_seed').texture("ae2:item/crystal_seed_" + id).displayName(loc + '种子').rarity(rarity ? rarity : RARITY_COMMON)
		 event.create('tiny_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "2").displayName('微型' + loc + '水晶').rarity(rarity ? rarity : RARITY_COMMON)
		 event.create('growing_tiny_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "2").displayName('生长中的微型' + loc + '水晶').rarity(rarity ? rarity : RARITY_COMMON)
		 event.create('small_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "3").displayName('小型' + loc + '水晶').rarity(rarity ? rarity : RARITY_COMMON)
		 event.create('growing_small_' + id + '_crystal').texture("ae2:item/crystal_seed_" + id + "3").displayName('生长中的小型' + loc + '水晶').rarity(rarity ? rarity : RARITY_COMMON)
	 }
	 crystal('Certus', "赛特斯石英")
	crystal('Fluix', "福鲁伊克斯")
let sheetSet = (name, loc, rarity) => {
	let id = name.toLowerCase()
	event.create('unprocessed_' + id + '_sheet').texture("kubejs:item/unprocessed_" + id + "_sheet").displayName('未处理' + loc + '板').rarity(rarity ? rarity : RARITY_COMMON)
	event.create('sturdy_' + id + '_sheet').texture("kubejs:item/sturdy_" + id + "_sheet").displayName('加固' + loc + '板').rarity(rarity ? rarity : RARITY_COMMON)
	event.create('reprocessed_' + id + '_sheet').texture("kubejs:item/reprocessed_" + id + "_sheet").displayName('再处理' + loc + '板').rarity(rarity ? rarity : RARITY_COMMON)
	event.create('reinforced_' + id + '_sheet').texture("kubejs:item/reinforced_" + id + "_sheet").displayName('致密' + loc + '板').rarity(rarity ? rarity : RARITY_COMMON)
}
	sheetSet('Zinc', "锌")

let metalSet = (name, rarity, toLowerCase) => {
	let id = name.toLowerCase()
	event.create(id + '_ingot').texture("kubejs:item/" + id + "_ingot").displayName(loc + '锭').rarity(rarity ? rarity : RARITY_COMMON)
	event.create(id + '_nugget').texture("kubejs:item/" + id + "_nugget").displayName(loc + '粒').rarity(rarity ? rarity : RARITY_COMMON)
	event.create(id + '_sheet').texture("kubejs:item/" + id + "_sheet").displayName(loc + '板').rarity(rarity ? rarity : RARITY_COMMON)
}
    //metalSet('Bronze')
	//metalSet('Steel')
	let mechanism = (name, loc, rarity) => {
		let id = name.toLowerCase()
		event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(loc + '构件').rarity(rarity ? rarity : RARITY_COMMON)
		event.create('incomplete_' + id + '_mechanism').texture("kubejs:item/incomplete_" + id + "_mechanism").type('create:sequenced_assembly').displayName('未完成的' + loc + '构件').rarity(rarity ? rarity : RARITY_COMMON)
	}
	mechanism('Refined', "精致", RARITY_UNCOMMON)
})

onEvent('block.registry', event => {
	// Register new blocks here
	 event.create('gem_rock').material('stone').hardness(1.0).displayName('宝石砾岩')
	 event.create('metal_rock').material('stone').hardness(1.0).displayName('金属砾岩')
	 event.create('alloy_rock').material('stone').hardness(1.0).displayName('合金砾岩')
	let machine = (name, loc, layer) => {
		let id = name.toLowerCase()
		event.create(id + '_machine')
			.model('kubejs:block/' + id + '_machine')
			.material('lantern')
			.hardness(3.0)
			.displayName(loc + '机器')
			.notSolid()
			.renderType(layer)
	}
	machine('Refined', "精致", "cutout")

})