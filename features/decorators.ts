/**
 * ============================================
 * DECORATORS DEMONSTRATION - All Types in One Class
 * ============================================
 * 
 * Decorators are functions that modify classes/members at declaration time.
 * They run when the class is defined, NOT when instances are created.
 * 
 * Execution order (bottom-to-top for multiple decorators on same item):
 * - Parameter Decorators run first
 * - Method/Accessor/Property Decorators run next  
 * - Class Decorators run last
 * 
 * Requires: "experimentalDecorators": true in tsconfig.json
 */

// ============================================
// 1. CLASS DECORATOR
// ============================================
// Runs when class is defined. Can modify or replace the class.
// Receives the class constructor as the only argument.
@classDecorator
class Boat {
  // ============================================
  // 2. PROPERTY DECORATOR
  // ============================================
  // Runs when property is defined. Can observe, modify, or replace property.
  // Receives (target, key) for old syntax.
  @testDecorator
  color: string = 'red';

  // ============================================
  // 3. ACCESSOR DECORATOR (GETTER)
  // ============================================
  // Runs when getter is defined. Works the same as property decorators.
  // Receives (target, key) for old syntax.
  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // ============================================
  // 4. METHOD DECORATOR with FACTORY
  // ============================================
  // Runs when method is defined. Can modify the method's behavior.
  // Receives (target, key, descriptor) for old syntax.
  // 
  // DECORATOR FACTORY: Outer function takes parameters,
  // returns the actual decorator function.
  // This allows passing custom configuration.
  @logError('Something bad!')  // <- This is the factory call
  pilot(
    // ============================================
    // 5. PARAMETER DECORATOR
    // ============================================
    // Runs when parameter is defined. Used for validation, logging, etc.
    // Receives (target, key, index) for old syntax.
    // NOTE: Parameter decorators run BEFORE method decorators.
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

// ============================================
// DECORATOR IMPLEMENTATIONS
// ============================================

/**
 * CLASS DECORATOR
 * @param constructor - The class constructor (typeof Boat)
 * Logs the class when it's defined.
 */
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);  // [class Boat]
}

/**
 * PARAMETER DECORATOR
 * @param target - The prototype of the class (for instance methods)
 * @param key - The name of the method containing this parameter
 * @param index - The parameter's position in the parameter list
 * Logs which parameter index belongs to which method.
 */
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);  // "pilot 0", "pilot 1"
}

/**
 * PROPERTY / ACCESSOR DECORATOR
 * @param target - The prototype of the class
 * @param key - The name of the property/getter
 * Logs the property/getter name when the class is defined.
 */
function testDecorator(target: any, key: string) {
  console.log(key);  // "color", "formattedColor"
}

/**
 * METHOD DECORATOR FACTORY
 * 
 * This is a DECORATOR FACTORY - a function that returns a decorator.
 * Why use this? To pass custom error messages.
 * 
 * @param errorMessage - Custom error message to log if method fails
 * @returns The actual method decorator function
 * 
 * HOW IT WORKS:
 * 1. Store the original method (desc.value)
 * 2. Replace it with a wrapper function
 * 3. Try-catch the wrapper to catch any errors
 * 4. If error occurs, log the custom message instead of crashing
 */
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;  // Store original method

    desc.value = function () {  // Replace with wrapper
      try {
        method();  // Try to execute original method
      } catch (e) {
        console.log(errorMessage);  // If error, log custom message
      }
    };
  };
}

// ============================================
// DECORATOR EXECUTION ORDER
// ============================================
// When this file runs (class definition time), the output is:
//
// 1. parameterDecorator: "pilot 0"
// 2. parameterDecorator: "pilot 1"
// 3. testDecorator: "color"
// 4. testDecorator: "formattedColor"
// 5. logError: (wraps pilot method)
// 6. classDecorator: [class Boat]
//
// Notice: Parameter decorators run BEFORE method decorators!
// Notice: Decorators run bottom-to-top (from inner to outer) when multiple
//         are on the same item.