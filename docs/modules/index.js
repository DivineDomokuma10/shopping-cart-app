import { Delete as DelItem } from "./delete.js";
import { reset as ResetItems } from "./reset.js";
import {renderCartItms as RenderItem} from "./renderCart.js";
import { add as AddItems, minus as RemoveItems, uniqueArr as navArr} from "./plusMinus.js";

const RootElement = document.querySelector('main');
const uniqueElementCount = document.querySelector('.unique-items');
const items = [
    {id:1, quantity:0},
    {id:2, quantity:0},
    {id:3, quantity:0},
    {id:4, quantity:0},
    {id:5, quantity:0},
    {id:6, quantity:0}
]

ResetItems('reset-btn');
RenderItem(RootElement,items);
AddItems('p',items,uniqueElementCount);
RemoveItems('m',items,uniqueElementCount);
DelItem('delete',RootElement,navArr,uniqueElementCount)