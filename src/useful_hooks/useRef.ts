import React, { useCallback, useRef } from 'react';

function useHookWithRefCallback() {
    const ref = useRef(null);
    const setRef = useCallback((node) => {
        if (ref.current) {
            // Make sure to cleanup any events/references added to the last instance
        }

        if (node) {
            // Check if a node is actually passed. Otherwise node would be null.
            // You can now do what you need to, addEventListeners, measure, etc.
        }

        // Save a reference to the node
        ref.current = node;
    }, []);

    return [setRef];
}

// function Component() {
//   // In your component you'll still recieve a `ref`, but it
//   // will be a callback function instead of a Ref Object
//   const [ref] = useHookWithRefCallback()

//   return <div ref={ref}>Ref element</div>
// }
// https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
