import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InfoOptionCosts } from '../../shared/moduls/info-option-costs';
import { OptionConfig } from '../../shared/moduls/option-config';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-select-config-car',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './select-config-car.component.html',
  styleUrl: './select-config-car.component.scss',
})
export class SelectConfigCarComponent implements OnInit {
  infoOptionCosts: InfoOptionCosts = new InfoOptionCosts();
  optionConfig?: OptionConfig;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.infoOptionCosts = this.sharedService.optionConfig();

    this.sharedService.getConfigModelColorSelected().subscribe((data) => {
      this.optionConfig = data;
      this.sharedService.setAdditionallyConfig(this.optionConfig);

      console.log(this.sharedService.optionConfig());
    });
  }

  addOption(): void {
    let config = this.optionConfig?.configs.filter(
      (item) => item.id == this.infoOptionCosts?.id
    )[0];
    this.infoOptionCosts.range = config?.range;
    this.infoOptionCosts.speed = config?.speed;
    this.infoOptionCosts.price = config?.price;
    this.infoOptionCosts.description = config?.description;
    this.sharedService.setInfoOptionCosts(config!);
  }

  changeExtraOption(event: Event): void {
    let extraOption = event.target as HTMLInputElement;
    switch (extraOption.id) {
      case 'includeTow':
        this.sharedService.setInfoTowHitch(this.infoOptionCosts.towHitch!);
        break;
      case 'includeYoke':
        this.sharedService.setInfoYoke(this.infoOptionCosts.yoke!);
        break;
    }
  }
}
