export default {
    created () {
        this.$store.commit('chageTabbrHide')
    },
    destroyed () {
        this.$store.commit('chageTabbrShow')
    }
}
