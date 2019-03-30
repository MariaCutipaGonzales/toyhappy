import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
	MatBadgeModule,
	MatButtonModule,
	MatCheckboxModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatPaginatorModule,
	MatRadioModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatTooltipModule,
	MatDialogModule,
	MAT_RIPPLE_GLOBAL_OPTIONS,
} from '@angular/material';


@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
  FlexLayoutModule, HttpClientModule,
  MatButtonModule,
  MatToolbarModule,
		MatInputModule,
		MatTabsModule,
		MatRadioModule,
		MatCheckboxModule,
		MatTooltipModule,
		MatSliderModule,
		MatSortModule,
		MatTableModule,
		MatPaginatorModule,
		MatExpansionModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatBadgeModule,
		MatFormFieldModule,
		MatSnackBarModule,
		MatMenuModule,
		MatSidenavModule,
		MatListModule,
		MatDialogModule,],
    exports:[BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
  FlexLayoutModule, HttpClientModule,
  MatButtonModule,
  MatToolbarModule,
		MatInputModule,
		MatTabsModule,
		MatRadioModule,
		MatCheckboxModule,
		MatTooltipModule,
		MatSliderModule,
		MatSortModule,
		MatTableModule,
		MatPaginatorModule,
		MatExpansionModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatBadgeModule,
		MatFormFieldModule,
		MatSnackBarModule,
		MatMenuModule,
		MatSidenavModule,
		MatListModule,
		MatDialogModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
