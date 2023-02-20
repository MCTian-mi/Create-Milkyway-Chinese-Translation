// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('client.generate_assets', event => {
    const rename = (item1, newName) => event.addLang(Item.of(item1).item.getDescriptionId(), newName)
    // rename mutton to BAAAAAAA
    rename('create:brass_hand', "镍质手部零件")
    rename('minecraft:enchanted_golden_apple', "神秘金苹果")
    rename('mw_core:incomplete_manyullyn_mechanism', "未完成的玛玉灵构件")
    rename('thermal:machine_press', "资本主义终结者")
    rename('immersiveengineering:plate_aluminum', "铝板")
    console.info('自定义物品名加载完成！')
})