/**
 * @beta
 */
export class TestBug {
  private x: string | undefined;

  set foo(x: string) {
    this.x = x;
  }
}
