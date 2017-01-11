// var data=  [
//         {
//             text:"项目",  
//             value:"1",  
//             list:  [
//                 {  
//                     text:"门店",  
//                     value:"1.1",  
//                     list:[
//                         {  
//                             text:"美容师",  
//                             value:"1.1.1" ,
//                         } 
//                      ]
//                 } 
//              ]
//         },  
//         {  
//             text:"美容",  
//             value:"2",  
//             list: [
//                 {  
//                     text:"郴州明桂园店",  
//                     value:"2.1",  
//                     adress:"南湖路9号 (明桂园后门)1",
//                     phone:"0735-21660781",
//                     list:[
//                         {  
//                             text:"美容师1",  
//                             value:"2.1.1" ,
//                             number:"001",
//                             name:"赵1",
//                             goodAt:"面部美白",
//                             avatar:"../images/girl_item2.1.jpg" 
//                         },  
//                         {  
//                             text:"美容师2",  
//                             value:"2.1.2" ,
//                             name:"赵2",
//                             number:"002",
//                             goodAt:"瘦身",
//                             avatar:"../images/girl_item2.2.jpg" 
//                         },  
//                         {  
//                             text:"美容师3",  
//                             value:"2.1.3" ,
//                             number:"003",
//                             name:"赵三",
//                             goodAt:"内分泌",
//                             avatar:"../images/girl_item1.1.jpg" 

//                         }  
//                      ]
//                 },  
//                 {  
//                     text:"郴州兴旺步行街店",  
//                     value:"2.2",  
//                     adress:"南湖路9号 (明桂园后门)2",
//                     phone:"0735-21660782",                    
//                     list:[                  
//                         {  
//                             text:"美容师1",  
//                             value:"2.2.1" ,
//                             number:"004",
//                             name:"赵四",
//                             goodAt:"内分泌",                            
//                             avatar:"../images/girl_item1.1.jpg" 
//                         },  
//                         {  
//                             text:"美容师2",  
//                             value:"2.2.2" ,
//                             number:"005",
//                             name:"赵无",
//                             goodAt:"内分泌",                            
//                             avatar:"../images/girl_item1.2.jpg" 
//                         } 
//                     ]  
//                 },
//                 {  
//                     text:"郴州人民西路店",  
//                     value:"2.3", 
//                     adress:"南湖路9号 (明桂园后门)3",
//                     phone:"0735-21660783",                    
//                     list: [                  
//                         {  
//                            text:"美容师1",  
//                             value:"2.3.1" ,
//                             number:"005",
//                             name:"赵无",
//                             goodAt:"内分泌",                            
//                             avatar:"../images/girl_item1.2.jpg"                            
//                         },  
//                         {  
//                             text:"美容师2",  
//                             value:"2.3.2" ,
//                             number:"005",
//                             name:"赵无",
//                             goodAt:"内分泌",                            
//                             avatar:"../images/girl_item1.2.jpg"                             
//                         }  
//                     ]  
//                 },                  
//             ]
//         }, 
//         {  
//            text:"瘦身",  
//             value:"3",  
//             list: [
//                 {  
//                     text:"郴州兴旺步行街店",  
//                     value:"3.1",
//                     adress:"南湖路9号 (明桂园后门)4",
//                     phone:"0735-21660784",                      
//                     list: [
//                         {  
//                             text:"美容师1",  
//                             value:"3.1.1" ,
//                             number:"005",
//                             name:"赵无",
//                             goodAt:"内分泌",                            
//                             avatar:"../images/girl_item1.2.jpg"                             
//                         },  
//                         {  
//                             text:"美容师2",  
//                             value:"3.1.2" ,
//                             number:"005",
//                             name:"赵无",
//                             goodAt:"内分泌",                            
//                             avatar:"../images/girl_item1.2.jpg"                              
//                         },  
//                         {  
//                             text:"美容师3",  
//                             value:"3.1.3" ,
//                             number:"005",
//                             name:"赵无",
//                             goodAt:"美白",                            
//                             avatar:"../images/girl_item1.2.jpg"                             
//                         }  
//                      ] 
//                 },  
//                 {  
//                     text:"郴州人民西路店",  
//                     value:"3.2",  
//                     list:[
//                         {  
//                             text:"美容师1",  
//                             value:"3.2.1" ,
//                             number:"005",
//                             name:"赵无",
//                             goodAt:"内分泌",                            
//                             avatar:"../images/girl_item1.2.jpg"                             
//                         },  
//                         {  
//                             text:"美容师2",  
//                             value:"3.2.2" ,
//                             number:"006",
//                             name:"赵无",
//                             goodAt:"内分泌",                            
//                             avatar:"../images/girl_item1.2.jpg"                              
//                         }  
//                     ]
                      
//                 },
//                 {  
//                     text:"郴州圣女总店",  
//                     value:"3.3",  
//                     list: [
//                         {  
//                             text:"美容师1",  
//                             value:"3.3.1" ,
//                             number:"007",
//                             name:"赵无",
//                             goodAt:"瘦身",                            
//                             avatar:"../images/girl_item1.2.jpg"                              
//                         },  
//                         {  
//                             text:"美容师2",  
//                             value:"3.3.2" ,
//                             number:"008",
//                             name:"赵无",
//                             goodAt:"内分泌",                            
//                             avatar:"../images/girl_item1.2.jpg"                              
//                         } 
//                     ] 
                      
//                 },                  
//              ] 
//         },         
//     ];  


+ function($) {

    $.smConfig.rawProjectsData = [

        {
            'name': '美容',
            'sub': [{
                'name': '郴州桂园路店',
                'sub': [ {
                    'name': '赵一',
                    'value':'3.3.2' ,
                    'number':'001',
                    'goodAt':'内分泌',                            
                    'avatar':'../images/girl_item1.2_reg.jpg'  
                }, {
                    'name': '周二',
                    'value':'2.1.2' ,
                    'number':'002',
                    'goodAt':'瘦身',
                    'avatar':'../images/girl_item2.2_reg.jpg',

                },{
                    'name': '赵一一',
                    'value':'2.1.2' ,
                    'number':'002',
                    'goodAt':'瘦身',
                    'avatar':'../images/girl_item2.2_reg.jpg',                    
                }, {
                    'name': '周二二',
                    'value':'2.1.2' ,
                    'number':'003',
                    'goodAt':'瘦身',
                    'avatar':'../images/girl_item2.2_reg.jpg',                    
                }
                ],
                'type': 1
            }, {
                'name': '郴州圣女总店',
                'sub': [{
                    'name': '请选择'
                }, {
                    'name': '赵二',
                    'value':'2.1.2' ,
                    'number':'004',
                    'goodAt':'瘦身',
                    'avatar':'../images/girl_item2.2_reg.jpg',                    
                }, {
                    'name': '王二',
                    'value':'2.1.2' ,
                    'number':'002',
                    'goodAt':'瘦身',
                    'avatar':'../images/girl_item2.2_reg.jpg',                    
                }],
                'type': 0
            }]
        }, {
            'name': '瘦身',
            'sub': [{
                    'name': '请选择',
                    'sub': [

                    ]
                }, {
                    'name': '郴州桂园路店',
                    'sub': [{
                        'name': '请选择'
                    }, {
                        'name': '舒雅望',
                        'value':'2.1.2' ,
                        'number':'005',
                        'goodAt':'瘦身',
                        'avatar':'../images/girl_item1.1_reg.jpg',                        
                    }, {
                        'name': '周杰伦',
                        'value':'2.1.2' ,
                        'number':'002',
                        'goodAt':'瘦身',
                        'avatar':'../images/girl_item1.2_reg.jpg',                       
                    }],
                    'type': 0
                }, {
                    'name': '郴州圣女总店',
                    'sub': [{
                        'name': '请选择',
                        'value':'2.1.2' ,
                        'number':'006',
                        'goodAt':'瘦身',
                        'avatar':'../images/girl_item2.2_reg.jpg',                           
                    }, {
                        'name': '吴亦凡',
                        'value':'2.1.2' ,
                        'number':'007',
                        'goodAt':'瘦身',
                        'avatar':'../images/girl_item2.1_reg.jpg',                           
                    }, {
                        'name': '郭德纲',
                        'value':'2.1.2' ,
                        'number':'008',
                        'goodAt':'瘦身',
                        'avatar':'../images/girl_item2.2_reg.jpg',                          
                    }],
                    'type': 0
                }

            ]
        },{
            'name': '秘密花园',
            'sub': [{
                    'name': '请选择',
                    'sub': [

                    ]
                }, {
                    'name': '郴州兴旺步行街店',
                    'sub': [{
                        'name': '请选择'
                    }, {
                        'name': '舒雅望',
                        'value':'2.1.2' ,
                        'number':'009',
                        'goodAt':'瘦身',
                        'avatar':'../images/girl_item2.1_reg.jpg',                           
                    }, {
                        'name': '周杰伦',
                        'value':'2.1.2' ,
                        'number':'002',
                        'goodAt':'瘦身',
                        'avatar':'../images/girl_item2.2_reg.jpg',                           
                    }],
                    'type': 0
                }, {
                    'name': '郴州圣女总店',
                    'sub': [{
                        'name': '请选择'
                    }, {
                        'name': '吴亦凡',
                        'value':'2.1.2' ,
                        'number':'010',
                        'goodAt':'瘦身',
                        'avatar':'../images/girl_item1.2_reg.jpg',                           
                    }, {
                        'name': '郭德纲',
                        'value':'2.1.2' ,
                        'number':'011',
                        'goodAt':'瘦身',
                        'avatar':'../images/girl_item1.1_reg.jpg',                           
                    }],
                    'type': 0
                }

            ]
        },
    ]
}(Zepto);