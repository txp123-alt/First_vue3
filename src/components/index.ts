import SvgIcon from '@/components/SvgIcon/index.vue'

const SvgIcons = {SvgIcon}

export default {
    install(app: any){
        console.log(window.getComputedStyle(document.body).margin);
        
        Object.keys(SvgIcons).forEach(key =>{
            app.component(key,SvgIcons[key])
        })
    }
}