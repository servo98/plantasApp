export default {
    methods: {
        sendError(title, text) {
            this.emitNoti({
                text,
                type: 'danger',
                title
            })
        },
        sendSuccess(title, text) {
            this.emitNoti({
                text,
                type: 'success',
                title
            })
        },
        sendWarning(title, text) {
            this.emitNoti({
                text,
                type: 'warning',
                title
            })
        },
        sendInfo(title, text) {
            this.emitNoti({
                text,
                type: 'info',
                title
            })
        },
        emitNoti(data){
            data.show = true
            this.$emit('notificate', data)
        }

    }
}
