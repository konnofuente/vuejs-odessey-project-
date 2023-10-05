<template>
   <form action="">
    <div>
        <slot name="help"></slot>
    </div>
    <div>
        <slot name="fields"></slot>
    </div>
    <div>
        <slot name="buttons"></slot>
    </div>
   </form>
</template>

<script >

export default {
    name: "FormVue",
}

</script>
