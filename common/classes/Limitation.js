class Limitation {
    static max(n) {
        return (event) => {
            var { currentTarget: input } = event
            var value = $(input).val()
            if (value === undefined) {
                return true
            }
            if (value.length > n) {
                input.value = value.substring(0, n)
                event.preventDefault();
            }
            return true;
        }
    }
}

export default Limitation;