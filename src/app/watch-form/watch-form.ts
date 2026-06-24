import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Watch } from '../watch';

@Component({
  selector: 'app-watch-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './watch-form.html',
  styleUrl: './watch-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchForm {
  private formBuilder = inject(FormBuilder);
  watchService = inject(Watch);

  editingId = signal<string | null>(null);

  watchForm = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
    episode: ['', Validators.required, Validators.min(1)],
    season: ['', Validators.required, Validators.min(1)],
    description: ['', Validators],
    status: ['', Validators]
  });

  onSubmit() {
    if (this.watchForm.valid){
      const formData = this.watchForm.getRawValue();

      if(this.editingId()) {
        this.watchService.updateWatch(this.editingId()!, formData).subscribe(() => {
          this.watchService.fetchWatch();
          this.cancelEdit();
        });
      } else {
        this.watchService.saveWatch(formData).subscribe(() => {
          this.watchService.fetchWatch();
          this.watchForm.reset();
          console.log('Movie saved successfully!');
        });
      }
    }
  }

  startEdit(watch: any) {
    this.editingId.set(watch._id);
    this.watchForm.patchValue({
      title: watch.title,
      episode: watch.episode,
      season: watch.season,
      description: watch.description,
      status: watch.status 
    });
  }

  cancelEdit() {
    this.editingId.set(null);
    this.watchForm.reset();
  }

  deleteWatch(id: string) {
    if (confirm("Are you sure you want to release this Movie")) {
      this.watchService.deleteWatch(id).subscribe(() => {
        this.watchService.fetchWatch();
      })
    }
  }
}
