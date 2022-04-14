import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Configuration } from './../../configuration';
// import { DefaultUrlSerializer } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class MouseMoveService {

    // declartion
    slider: any;
    PopUpData: any;

    constructor() { }

    mouseMoveTable() {
        this.slider = document.querySelector('.items');
        // console.log('mouse hover event===>', this.slider);
        if (this.slider !== null) {
            let isDown = false;
            let startX;
            let startY;
            let scrollLeft;
            this.slider.addEventListener('mousedown', (e: any) => {
                isDown = true;
                this.slider.classList.add('active');
                startX = e.pageX - this.slider.offsetLeft;
                // console.log(startX);
                scrollLeft = this.slider.scrollLeft;
            });
            this.slider.addEventListener('mouseleave', () => {
                isDown = false;
                this.slider.classList.remove('active');
            });
            this.slider.addEventListener('mouseup', () => {
                isDown = false;
                this.slider.classList.remove('active');
            });
            this.slider.addEventListener('mousemove', (e: any) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - this.slider.offsetLeft;
                const walk = (x - startX) * 2; //scroll-fast
                this.slider.scrollLeft = scrollLeft - walk;
                // console.log(walk);

            });
        }
    }

}