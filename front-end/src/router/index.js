import {createRouter, createWebHashHistory} from "vue-router";
import homePage from "@/components/homePage";
import allProjects from "@/components/allProjects";
import efts from "@/components/efts";
const routes = [
    {path: '/', redirect: 'homePage'},
    {path: '/home', component: homePage},
    {path: '/allProjects', component: allProjects},
    {path: '/echoesFromTheShadows', component: efts},

]
export const router = createRouter({
    history:createWebHashHistory(),
    routes
})