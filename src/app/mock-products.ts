import { Product } from "./product";
const fillerString: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat condimentum ex eget porta. Aliquam pulvinar turpis felis, quis interdum sapien tempus ut. Duis sollicitudin luctus turpis, eu consectetur neque luctus vehicula. Proin quis lacus lacinia, condimentum mi nec, feugiat tortor. Cras quis grav$ida justo. Donec facilisis est sollicitudin, molestie. '
export const PRODUCTS: Product[] =[
    {$id: 1, name: 'Small Porcelein bowl, Black and white', type: 'pot', description: fillerString, image:'https://i.imgur.com/zMxOkay.jpg', tags: "small pot"},
    {$id: 2, name: 'Medium Bowl, Cream and Blue', type: 'pot', description: fillerString, image:'https://imgur.com/Zi7i8Uh.jpg' , tags: "small pot"},
    {$id: 3, name: 'Small Porcelein bowl, Black and white', type: 'pot', description: fillerString, image:'https://imgur.com/HPMxriv.jpg' , tags: "medium pot"},
    {$id: 4, name: 'Set of 3 Small porcelein Bowls', type: 'pot', description: fillerString, image:'https://imgur.com/Wvq1xvh.jpg', tags: "small pot"},
    {$id: 5, name: 'test-string', type: 'weaving', description: fillerString, image:'', tags: "small pot"},
    {$id: 6, name: 'test-string', type: 'weaving', description: fillerString, image:'', tags: "small pot"},
    {$id: 7, name: 'Medium Bowl, Orange segement pattern', type: 'pot', description: fillerString, image:'https://imgur.com/RePRoy1.jpg', tags: "large pot"},
    {$id: 8, name: 'test-string', type: 'weaving', description: fillerString, image:'', tags: "small pot"},
    {$id: 9, name: 'Medium Pot, Blue and White patterns', type: 'pot', description: fillerString, image:'https://imgur.com/BRo44EH.jpg', tags: "medium pot"},
    {$id: 10, name: 'test-string', type: 'weaving', description: fillerString, image:'', tags: "small pot"},
]