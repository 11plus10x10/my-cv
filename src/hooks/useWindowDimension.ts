import * as React from "react";
import rafSchd from "raf-schd";

export interface IWindowDimensions {
    width: number,
    height: number,
}

export function useWindowDimension(): IWindowDimensions {
    const [dimensions, setDimensions] = React.useState<IWindowDimensions>({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        const schedule = rafSchd(handleResize);
        window.addEventListener("resize", schedule);
        //  Cleanup.
        return () => window.removeEventListener("resize", schedule);
    }, []);
    return dimensions;
}
