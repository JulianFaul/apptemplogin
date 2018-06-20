<template>
    <f7-page>
        <f7-navbar>
            <f7-nav-left>
                <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
            </f7-nav-left>
            <div class="title">Test</div>
            <f7-nav-right>
                <f7-link class="searchbar-enable" data-searchbar=".searchbar-components" icon="fa fa-search"></f7-link>
            </f7-nav-right>
            <f7-searchbar class="searchbar-components" search-container=".components-list" search-in="a" expandable></f7-searchbar>
        </f7-navbar>
    
        <f7-block-title class="searchbar-found"></f7-block-title>
       
        <f7-list class="components-list searchbar-found">
            <f7-list-item link="/about/" title="About" panel-close>
                <f7-icon slot="media" icon="fa fa-info fa-fw"></f7-icon>
            </f7-list-item>
            <f7-list-item link="/form/" title="Form" panel-close>
                <f7-icon slot="media" icon="fa fa-vcard-o fa-fw"></f7-icon>
            </f7-list-item>
            <f7-list-item link="/dynamic-route/blog/11/post/23/" title="Dynamic Route" panel-close>
                <f7-icon slot="media" icon="fa fa-rss fa-fw"></f7-icon>
            </f7-list-item>
        </f7-list>
        <f7-list class="searchbar-not-found">
            <f7-list-item title="Nothing found"></f7-list-item>
        </f7-list>
    </f7-page>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        
    }


};

</script>
