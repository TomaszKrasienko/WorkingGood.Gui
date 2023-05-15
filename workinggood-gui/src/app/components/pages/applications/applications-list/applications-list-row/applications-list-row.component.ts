import {Component, Input, OnInit} from '@angular/core';
import {Application} from "../../../../models/application/application";
import {ApplicationService} from "../../../../services/application/application.service";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-applications-list-row',
  templateUrl: './applications-list-row.component.html',
  styleUrls: ['./applications-list-row.component.css']
})
export class ApplicationsListRowComponent implements OnInit {
  @Input() application: Application;
  private applicationUrl: string = environment["APPLICATION_URL"];
  constructor(private applicationService: ApplicationService) { }
  ngOnInit(): void {
  }
  downloadFile(){
    this.applicationService.getDocument(this.application.id)
      .subscribe((data: Blob)=> {
        const downloadLink = document.createElement('a');
        const blobUrl = URL.createObjectURL(data);
        downloadLink.href = blobUrl;

        // Ustaw nazwę pliku
        downloadLink.download = 'nazwa-pliku';

        // Dodaj link do dokumentu i kliknij w niego, aby rozpocząć pobieranie
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Usuń link po pobraniu
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(blobUrl);
        // const objectUrl = URL.createObjectURL(data);
        // URL.revokeObjectURL(objectUrl);
        //this.saveFile(data);
      }, error => console.log(error));
    // window.open(`${this.applicationUrl}/applications/downloadDocument/${this.application.id}`);
  }

}
