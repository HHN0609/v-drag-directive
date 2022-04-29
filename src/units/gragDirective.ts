import { Directive, DirectiveBinding} from 'vue'
// 本插件的限制：因为多个元素带有v-drag指令是，会共用这个targetElement，所以一次只能拖动一个元素
let targetElement: HTMLElement

function mouseDownHandle (event: MouseEvent) {
    let el: HTMLElement = event.currentTarget as HTMLElement
    // 切换全局的 targetElement
    targetElement = el
    let limit: number = Number(targetElement.getAttribute("limit"))
    
    // 鼠标点击是，鼠标相对于el元素的偏差
    let _x: number = event.offsetX
    let _y: number = event.offsetY
    el.setAttribute("_x", _x.toString())
    el.setAttribute("_y", _y.toString())
    if(_y < targetElement.offsetHeight * limit){
        window.addEventListener("mousemove", mouseMoveHandle)
    }
}

function mouseUpHandle (event: MouseEvent) {
    // let el: HTMLElement = event.currentTarget as HTMLElement
    // targetElement = null
    window.removeEventListener("mousemove", mouseMoveHandle)
} 

function mouseMoveHandle (event: MouseEvent) {
    let _x = Number(targetElement.getAttribute("_x"))
    let _y = Number(targetElement.getAttribute("_y"))
    targetElement.style.top = event.clientY - _y + "px"
    targetElement.style.left = event.clientX - _x + "px"
}

function addStyle () {
    
}

export const vGrag: Directive = {
    created(el: HTMLElement, binding: DirectiveBinding){
        // limit的默认值是1，limit对鼠标的位置进行限制，只有满足这个limit时候才能被拖动
        if(binding.arg === "limit"){
            el.setAttribute("limit", binding.value)
        } else {
            el.setAttribute("limit", "1")
        }
        el.style.position = "absolute"
    },
    mounted(el: HTMLElement){
        el.addEventListener("mousedown", mouseDownHandle)
        el.addEventListener("mouseup", mouseUpHandle)
    },
    unmounted(el: HTMLElement){
        el.removeEventListener("mousedown", mouseDownHandle)
        el.removeEventListener("mouseup", mouseUpHandle)
    }
}
