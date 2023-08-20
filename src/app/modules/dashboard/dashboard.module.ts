import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NftComponent } from './pages/nft/nft.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { NftSingleCardComponent } from './components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from './components/nft/nft-dual-card/nft-dual-card.component';
import { NftChartCardComponent } from './components/nft/nft-chart-card/nft-chart-card.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftHeaderComponent } from './components/nft/nft-header/nft-header.component';
import { NftAuctionsTableComponent } from './components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftAuctionsTableItemComponent } from './components/nft/nft-auctions-table-item/nft-auctions-table-item.component';

import { MoviesComponent } from './pages/movies/movies.component';
import { ListComponent as MovieListComponent } from './pages/movies/list/list.component';
import { CrudComponent as MovieCrudComponent } from './pages/movies/crud/crud.component';

import { DirectorsComponent } from './pages/directors/directors.component';
import { ListComponent as DirectorListComponent } from './pages/directors/list/list.component';
import { CrudComponent as DirectorCrudComponent } from './pages/directors/crud/crud.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NftComponent,
    NftSingleCardComponent,
    NftDualCardComponent,
    NftChartCardComponent,
    NftHeaderComponent,
    NftAuctionsTableComponent,
    NftAuctionsTableItemComponent,
    MoviesComponent,
    MovieListComponent,
    MovieCrudComponent,
    DirectorsComponent,
    DirectorListComponent,
    DirectorCrudComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class DashboardModule {}
