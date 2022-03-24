/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ThemeType } from '@ant-design/icons-angular';
import { BooleanInput, NzTSType } from 'ng-zorro-antd/core/types';
import { NzFormDirective } from './form.directive';
import * as i0 from "@angular/core";
export interface NzFormTooltipIcon {
    type: NzTSType;
    theme: ThemeType;
}
export declare class NzFormLabelComponent implements OnDestroy {
    private cdr;
    private nzFormDirective;
    static ngAcceptInputType_nzRequired: BooleanInput;
    static ngAcceptInputType_nzNoColon: BooleanInput;
    nzFor?: string;
    nzRequired: boolean;
    set nzNoColon(value: boolean);
    get nzNoColon(): boolean;
    private noColon;
    nzTooltipTitle?: NzTSType;
    set nzTooltipIcon(value: string | NzFormTooltipIcon);
    get tooltipIcon(): NzFormTooltipIcon;
    private _tooltipIcon;
    private destroy$;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, nzFormDirective: NzFormDirective);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzFormLabelComponent, [null, null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NzFormLabelComponent, "nz-form-label", ["nzFormLabel"], { "nzFor": "nzFor"; "nzRequired": "nzRequired"; "nzNoColon": "nzNoColon"; "nzTooltipTitle": "nzTooltipTitle"; "nzTooltipIcon": "nzTooltipIcon"; }, {}, never, ["*"]>;
}
