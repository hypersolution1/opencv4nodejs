import { assertError, assertPropsWithValue } from '../../../utils/testUtils';
import { TestContext } from '../../model';

export default function (args: TestContext) {
  const { cv } = args;

  describe('constructor', () => {
    it('should throw if args empty', () => {
      assertError(() => new cv.Vec(), 'expected arguments');
    });

    it('should throw if insufficient args', () => {
      // @ts-expect-error expected arguments
      assertError(() => new cv.Vec(0), 'expected arguments');
    });

    it('should throw for trying to insantiate invalid vec5', () => {
      // @ts-expect-error  expected arguments (u, v), (w), x, y, (z)
      assertError(() => new cv.Vec6(5, 10, 20, 30, 40), 'Vec::New - expected arguments (u, v), (w), x, y, (z)');
    });

    describe('Vec2', () => {
      it('should have int positions', () => {
        const x = 100;
        const y = 200;
        assertPropsWithValue(new cv.Vec2(x, y), { x, y });
      });

      it('should have double positions', () => {
        const x = 100.12345;
        const y = 200.89764;
        assertPropsWithValue(new cv.Vec2(x, y), { x, y });
      });

      it('should have negative int positions', () => {
        const x = -100;
        const y = -200;
        assertPropsWithValue(new cv.Vec2(x, y), { x, y });
      });

      it('should have negative double positions', () => {
        const x = -100.12345;
        const y = -200.89764;
        assertPropsWithValue(new cv.Vec2(x, y), { x, y });
      });
    });

    describe('Vec3', () => {
      it('should have int positions', () => {
        const x = 100;
        const y = 200;
        const z = 300;
        assertPropsWithValue(new cv.Vec3(x, y, z), { x, y, z });
      });

      it('should have double positions', () => {
        const x = 100.12345;
        const y = 200.89764;
        const z = 300.034;
        assertPropsWithValue(new cv.Vec3(x, y, z), { x, y, z });
      });

      it('should have negative int positions', () => {
        it('should have int positions', () => {
          const x = -100;
          const y = -200;
          const z = -300;
          assertPropsWithValue(new cv.Vec3(x, y, z), { x, y, z });
        });
      });

      it('should have negative double positions', () => {
        const x = -100.12345;
        const y = -200.89764;
        const z = -300.034;
        assertPropsWithValue(new cv.Vec3(x, y, z), { x, y, z });
      });
    });

    describe('Vec4', () => {
      it('should have int positions', () => {
        const w = 50;
        const x = 100;
        const y = 200;
        const z = 300;
        assertPropsWithValue(new cv.Vec4(w, x, y, z), {
          w, x, y, z,
        });
      });

      it('should have double positions', () => {
        const w = 50.99;
        const x = 100.12345;
        const y = 200.89764;
        const z = 300.034;
        assertPropsWithValue(new cv.Vec4(w, x, y, z), {
          w, x, y, z,
        });
      });

      it('should have negative int positions', () => {
        it('should have int positions', () => {
          const w = -50;
          const x = -100;
          const y = -200;
          const z = -300;
          assertPropsWithValue(new cv.Vec4(w, x, y, z), {
            w, x, y, z,
          });
        });
      });

      it('should have negative double positions', () => {
        const w = -50.99;
        const x = -100.12345;
        const y = -200.89764;
        const z = -300.034;
        assertPropsWithValue(new cv.Vec4(w, x, y, z), {
          w, x, y, z,
        });
      });
    });

    describe('Vec6', () => {
      it('should have int positions', () => {
        const u = 50;
        const v = 100;
        const w = 200;
        const x = 300;
        const y = 400;
        const z = 500;
        assertPropsWithValue(new cv.Vec6(u, v, w, x, y, z), {
          u, v, w, x, y, z,
        });
      });

      it('should have double positions', () => {
        const u = 50.99;
        const v = 100.12345;
        const w = 200.89764;
        const x = 300.034;
        const y = 400.254;
        const z = 500.543;
        assertPropsWithValue(new cv.Vec6(u, v, w, x, y, z), {
          u, v, w, x, y, z,
        });
      });

      it('should have negative int positions', () => {
        it('should have int positions', () => {
          const u = -50;
          const v = -100;
          const w = -200;
          const x = -300;
          const y = -400;
          const z = -500;
          assertPropsWithValue(new cv.Vec6(u, v, w, x, y, z), {
            u, v, w, x, y, z,
          });
        });
      });

      it('should have negative double positions', () => {
        const u = -50.99;
        const v = -100.12345;
        const w = -200.89764;
        const x = -300.034;
        const y = -400.254;
        const z = -500.543;
        assertPropsWithValue(new cv.Vec6(u, v, w, x, y, z), {
          u, v, w, x, y, z,
        });
      });
    });
  });
}
