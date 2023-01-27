class Restriction {
    static disallowNumber() {
        return (event) => {
            if (48 <= event.keyCode && event.keyCode <= 57) {
                event.preventDefault();
            }
            return true;
        }
    }
}

export default Restriction;