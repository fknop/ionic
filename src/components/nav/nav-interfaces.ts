export interface ViewLoaded {
  ionViewLoaded(): void;
}

export interface ViewWillEnter {
  ionViewWillEnter(): void;
}

export interface ViewDidEnter {
  ionViewDidEnter(): void;
}

export interface ViewWillLeave {
  ionViewWillLeave(): void;
}

export interface ViewDidLeave {
  ionViewDidLeave(): void;
}

export interface ViewWillUnload {
  ionViewWillUnload(): void;
}

export interface ViewDidUnload {
  ionViewDidUnload(): void;
}

export interface NavOptions {
  animate?: boolean;
  animation?: string;
  direction?: string;
  duration?: number;
  easing?: string;
  id?: string;
  keyboardClose?: boolean;
  preload?: boolean;
  transitionDelay?: number;
  progressAnimation?: boolean;
  climbNav?: boolean;
  ev?: any;
}

export const DIRECTION_BACK = 'back';
export const DIRECTION_FORWARD = 'forward';
