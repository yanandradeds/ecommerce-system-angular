import { TestBed, inject } from '@angular/core/testing';
import { EcommerceApiService } from './ecommerce_api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SERVICE VALIDATE TEST', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should fail in validate', inject([EcommerceApiService], (service: EcommerceApiService) => {
    const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJ' +
                      'zdWIiOiJhZG1pbiIsImlhdCI6MTc0OTU4MzI1NCwiZXhwIjoxNzQ5NTg2ODU0LCJpc3MiOi' +
                      'JodHRwOi8vbG9jYWxob3N0In0.96Fv4IN3Ie2oF6QrKeHwJm5TPM1_MNFYJ1siyHyBZOU';
    
    service.set('accessToken', mockToken);
    expect(service.isAuthenticatedAndValid()).toBeFalse();
  }));
});
