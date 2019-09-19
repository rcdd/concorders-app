import { Animation } from '@ionic/core';

export namespace CustomAnimation { // tslint:disable-line
    'use strict';

    export function slideInEnter(AnimationC: Animation, baseEl: HTMLElement, opts?: any) {
        const baseAnimation = new AnimationC();

        const backdropAnimation = new AnimationC();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
        backdropAnimation.fromTo('opacity', 0.01, 0.4);

        const wrapperAnimation = new AnimationC();
        wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));

        wrapperAnimation.beforeStyles({opacity: 1})
            .fromTo('translateX', '100%', '0%');

        return Promise.resolve(baseAnimation
            .addElement(baseEl)
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .duration(666)
            .beforeAddClass('show-modal')
            .add(backdropAnimation)
            .add(wrapperAnimation));
    }

    export function slideOutLeave(AnimationC: Animation, baseEl: HTMLElement, opts?: any) {

        const baseAnimation = new AnimationC();

        const backdropAnimation = new AnimationC();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
        backdropAnimation.fromTo('opacity', 0.4, 0.0);

        const wrapperAnimation = new AnimationC();
        const wrapperEl = baseEl.querySelector('.modal-wrapper');
        wrapperAnimation.addElement(wrapperEl);
        const wrapperElRect = wrapperEl.getBoundingClientRect();

        wrapperAnimation.beforeStyles({opacity: 1})
            .fromTo('translateX', '0%', `${window.innerHeight - wrapperElRect.top}px`);


        return Promise.resolve(baseAnimation
            .addElement(baseEl)
            .easing('ease-out')
            .duration(333)
            .add(backdropAnimation)
            .add(wrapperAnimation));
    }
}
