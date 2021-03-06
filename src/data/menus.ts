const Menus = [
    {
        "text": "Dashboard",
        "code":"dashboard",
        "link": "/home",
        "icon": "dashboard"
    },{
        "text":"Pages",
        "code":"pages",
        "link":"/pages",
        "icon":"pages",
        "submenu":[
            {
                "code":"dayofweek",
                "text":"每日工作",
                "link":"/week/task"
            },{
                "code":"Timeline",
                "text":"Timeline",
                "link":"/Timeline"
            },{
                "code":"LoginPage",
                "text":"Login Page",
                "link":"/Login"
            },{
                "code":"Register",
                "text":"Register Page",
                "link":"/Register"
            }

        ]
    },{
        "text":"工作计划",
        "code":"Gtasks",
        "link":"/gtasks",
        "icon":"apps",
        "submenu": [
            {
                "code":"gtaskslist",
                "text":"待办任务",
                "link":"/gtasks/gtaskslist"
            },
            {
                "code":"gtaskedit",
                "text":"待办任务编辑",
                "link":"/gtasks/gtasksedit"
            }
        ]
    },{
        "text":"Forms",
        "code":"Forms",
        "link":"/Forms",
        "icon":"content_paste"
    },{
        "text":"Tables",
        "code":"Tables",
        "link":"/Tables",
        "icon":"grid_on"
    },{
        "text":"Maps",
        "code":"maps",
        "link":"/Maps",
        "icon":"place"
    },{
        "text":"Widgets",
        "code":"widgets",
        "link":"/Widgets",
        "icon":"widgets"
    },{
        "text":"Charts",
        "code":"charts",
        "link":"/charts",
        "icon":"timeline"
    },{
        "text":"Calendar",
        "code":"Calendar",
        "link":"/Calendar",
        "icon":"date_range"
    }




]

export default  Menus;