import { atom } from "recoil";

const mobileNavbarToggleAtom = atom({
    key: 'mobileNavbarToggleAtom',
    default: false,
});

export default mobileNavbarToggleAtom;