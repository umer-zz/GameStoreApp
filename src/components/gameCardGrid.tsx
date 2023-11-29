import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import GameCard from "./GameCard";
import { Game } from "../api/models/Game";

const GameCardGrid = ({ data, gridClass }: { data: any, gridClass: string }) => {
    const root = useRef(null);

    useLayoutEffect(() => {
        if (data) {
            const ctx = gsap.context(() => {
                // Target the two specific elements we have asigned the animate class
                // gsap.to("[data-animate='fade']", {
                //     opacity:1
                // });
                gsap.fromTo(".GameCard", {
                    opacity: 0,
                    y: -100,
                }, {
                    opacity: 1,
                    y: 0,
                    stagger: {
                        each: 0.05,
                        from: 'edges'
                    }
                });

            }, root);// <- Scope!

            return () => ctx.revert();
        }

    }, [data]);
    return (
        <div className={gridClass} ref={root}>
            {data && data.results.map((ele: Game) => <GameCard key={ele.id} data={ele}></GameCard>)}
        </div>
    );
}

export default GameCardGrid;