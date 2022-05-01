import { Directive, DirectiveBinding, HtmlHTMLAttributes } from "vue"

export const vScale:Directive = {
    created(el: HTMLElement, binding:DirectiveBinding){
        el.style.position = 'absolute'
        el.style.resize = "both"
        el.style.overflow = "hidden"
    }
}