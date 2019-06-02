function createStore() {
        // The store needs to have four parts
        // 1. The state.
        let state;
        // 2. Get the state.
        const getState = () => state;
        // 3. Listen to changes on the state.
        // 4. Update the state.

        return {
                getState,
        };
}
