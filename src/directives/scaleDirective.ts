import { Directive, DirectiveBinding } from "vue"
let targetElement: HTMLElement

function mouseDownHandle (event: MouseEvent) {

}

function mouseUpHandle (event: MouseEvent) {

}

function mouseMoveHandle (event: MouseEvent) {

}

// function patchRea
export const vScale:Directive = {
    created(el: HTMLElement, binding:DirectiveBinding){
        el.style.position = 'absolute'
        el.style.resize = "both"
        el.style.overflow = "hidden"
        // el.addEventListener("resize", () => {
            
        // })
    },
    mounted(el: HTMLElement, binding:DirectiveBinding){

    },
    unmounted(el: HTMLElement, binding:DirectiveBinding){
        el.style.position = 'static'
        el.style.resize = ""
        el.style.overflow = ""
    }
}