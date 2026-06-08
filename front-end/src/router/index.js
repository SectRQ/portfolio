import {createRouter, createWebHashHistory} from "vue-router";
import homePage from "@/components/homePage";
import allProjects from "@/components/allProjects";
import efts from "@/components/efts";
import ewa from "@/components/ewa";
import hva from "@/components/hva";
import fys from "@/components/fys";
const routes = [
    {path: '/', redirect: 'home'},
    {path: '/home', component: homePage},
    {path: '/allProjects', component: allProjects},
    {path: '/echoesFromTheShadows', component: efts},
    {path: '/enterpriseWebApplication', component: ewa},
    {path: '/agileDevelopment', component: hva},
    {path: '/fastenYourSeatbelts', component: fys},

]
export const router = createRouter({
    history:createWebHashHistory(),
    routes
})