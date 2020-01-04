export const menus = [
    {
        id: 'ybp',
        text: '仪表盘',
        subItems: [
            { id: 'wzlgfx', text: '文章浏览量分析', path: '/admin/analyse' },
            { id: 'zjfb', text: '最近发布', path: '/admin/recent' },
        ]
    }, 
    {
        id: 'wzgl',
        text: '文章管理',
        subItems: [
            { id:'cjwz', text: '创建文章', path: '/admin/create_article'},
            { id:'wzcx', text: '文章查询', path: '/admin/search' },
        ]
    },
    {
        id: 'fbgl',
        text: '发布管理',
        subItems: [
            { id: 'spgl', text: '审批管理' },
            { id: 'jjfb', text: '拒绝列表' },
        ]
    }
]

export function findItemByPath(path) {
    for (let menu of menus) {
        for (let menuItem of menu.subItems) {
            if (menuItem.path === path) {
                return {
                    menuId: menu.id,
                    itemId: menuItem.id
                }
            }
        }
    }
    return null;
}

// export const mapPath = {
//     '/admin/analyse': menus[0].subItems[0],
//     '/admin/recent': menus[0].subItems[1],
// }