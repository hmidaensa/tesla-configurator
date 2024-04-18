import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Color, ModelCar } from '../moduls/model-car';
import { InfoOptionCosts } from '../moduls/info-option-costs';
import { Config, OptionConfig } from '../moduls/option-config';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isActivateStepper2 = signal(false);
  isActivateStepper3 = signal(false);

  towHitchPrice = signal(1000);
  yokePrice = signal(1000);

  carsSelected = signal<ModelCar | undefined>(undefined);
  colorsModelSelected = signal<Color[]>([]);
  imgUrl = signal<string>('');

  colorCarSelected = signal<Color | undefined>(undefined);

  optionConfig = signal<InfoOptionCosts>(new InfoOptionCosts());

  estimatePrice = computed(
    () => this.optionConfig().color?.price! + this.optionConfig().price!
  );

  estimatePriceGlobale = computed(
    () =>
      this.estimatePrice() +
      (this.optionConfig().towHitch ? this.towHitchPrice() : 0) +
      (this.optionConfig().yoke ? this.yokePrice() : 0)
  );
  constructor(private http: HttpClient) {}

  getAllModelCars(): Observable<ModelCar[]> {
    return this.http.get<ModelCar[]>('/models');
  }

  setSelectedCars(modelCar: ModelCar): void {
    this.carsSelected.set(modelCar);
    this.colorsModelSelected.set(modelCar.colors);
    this.changeStep2(false);
    this.changeStep3(false);
  }

  setSelectedColor(color: Color): void {
    this.optionConfig.set(new InfoOptionCosts());
    this.colorCarSelected.set(color);
    this.optionConfig.update((item) => {
      return {
        ...item,
        color: color,
        model: this.carsSelected()?.description,
      };
    });
    this.changeStep2(true);
    this.changeStep3(false);
  }

  setInfoOptionCosts(config: Config): void {
    this.optionConfig.update((item) => {
      return {
        ...item,
        price: config.price,
        range: config.range,
        speed: config.speed,
        id: config.id,
        description: config.description,
      };
    });
    this.refreshGlobaleCosts();
    this.changeStep3(true);
  }

  setAdditionallyConfig(optionConfig: OptionConfig): void {
    this.optionConfig.update((item) => {
      return {
        ...item,
        towHitchConfig: optionConfig.towHitch,
        yokeConfig: optionConfig.yoke,
        imgUrl: this.imgUrl(),
      };
    });
  }

  setInfoTowHitch(towHitch: boolean): void {
    this.optionConfig.update((item) => {
      return {
        ...item,
        towHitch: towHitch,
      };
    });
    this.refreshGlobaleCosts();
  }
  setInfoYoke(yoke: boolean): void {
    this.optionConfig.update((item) => {
      return {
        ...item,
        yoke: yoke,
      };
    });
    this.refreshGlobaleCosts();
  }

  refreshGlobaleCosts(): void {

    this.optionConfig.update((item) => {
      return {
        ...item,
        estimatePrice: this.estimatePriceGlobale(),
        yokePrice: this.yokePrice(),
        towHitchPrice: this.towHitchPrice(),
      };
    });
  }

  changeStep2(allowStep: boolean): void {
    this.isActivateStepper2.set(allowStep);
  }

  changeStep3(allowStep: boolean): void {
    this.isActivateStepper3.set(allowStep);
  }

  setImage(imgUrl: string): void {
    this.imgUrl.set(imgUrl);
  }

  getConfigModelColorSelected(): Observable<OptionConfig> {
    return this.http.get<OptionConfig>('/options/' + this.carsSelected()?.code);
  }
}
